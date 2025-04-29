import React from 'react';
import { Link } from 'react-router-dom';
import ToolCard from './ToolCard';
import { getFeaturedTools } from '../data/tools';
import { Button } from "@/components/ui/button";

const FeaturedTools = () => {
  const tools = getFeaturedTools();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Популярные инструменты</h2>
          <Link to="/tools">
            <Button variant="outline">Все инструменты</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
