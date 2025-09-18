import React, { useLayoutEffect, useRef, useState } from "react";
import type { OrgNode } from "../data";

const OrgChartCard: React.FC<{ person: OrgNode }> = ({ person }) => {
  return (
    <div
      data-id={person.id}
      className={`bg-blue-900 text-white py-3 px-6 rounded-lg shadow-md text-center min-w-max z-10 hover:shadow-xl transition-shadow duration-300 ease-in-out ${
        person.className || ""
      }`}
    >
      <h3 className="font-semibold text-sm tracking-wide">{person.name}</h3>
      {person.role && <p className="text-xs text-gray-300">{person.role}</p>}
    </div>
  );
};

// 4. Recursive Renderer for Nodes
const NodeRenderer: React.FC<{ person: OrgNode }> = ({ person }) => {
  return (
    <div className="flex flex-col items-center">
      <OrgChartCard person={person} />
      {person.children && person.children.length > 0 && (
        <div className="flex justify-center mt-16">
          {person.children.map((child) => (
            <div key={child.id} className="px-5">
              <NodeRenderer person={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const OrganizationChart: React.FC<{ data: OrgNode }> = ({ data }) => {
  const [paths, setPaths] = useState<string[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const calculatePaths = () => {
      if (!containerRef.current) return;

      const newPaths: string[] = [];
      const nodeElements = new Map<string, HTMLElement>();

      containerRef.current.querySelectorAll("[data-id]").forEach((el) => {
        const id = (el as HTMLElement).dataset.id;
        if (id) nodeElements.set(id, el as HTMLElement);
      });

      const generatePaths = (person: OrgNode) => {
        const parentEl = nodeElements.get(person.id);
        if (!parentEl || !person.children) return;

        const parentRect = parentEl.getBoundingClientRect();
        const containerRect = containerRef.current!.getBoundingClientRect();

        person.children.forEach((child) => {
          const childEl = nodeElements.get(child.id);
          if (!childEl) return;

          const childRect = childEl.getBoundingClientRect();

          const startX =
            parentRect.left - containerRect.left + parentRect.width / 2;
          const startY = parentRect.top - containerRect.top + parentRect.height;
          const endX =
            childRect.left - containerRect.left + childRect.width / 2;
          const endY = childRect.top - containerRect.top;

          const path = `M ${startX},${startY} V ${
            startY + (endY - startY) / 2
          } H ${endX} V ${endY}`;
          newPaths.push(path);
          generatePaths(child);
        });
      };

      generatePaths(data);
      setPaths(newPaths);
    };

    // Use a timeout to ensure all elements are rendered before calculating paths
    const timer = setTimeout(calculatePaths, 100);

    window.addEventListener("resize", calculatePaths);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculatePaths);
    };
  }, [data]);

  return (
    <div ref={containerRef} className="relative inline-block p-10">
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{ pointerEvents: "none" }}
      >
        <g>
          {paths.map((path, i) => (
            <path
              key={i}
              d={path}
              fill="none"
              stroke="#9CA3AF"
              strokeWidth="2"
            />
          ))}
        </g>
      </svg>
      <NodeRenderer person={data} />
    </div>
  );
};

export default OrganizationChart;
