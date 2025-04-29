import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import { getToolsByCategory } from '../data/tools';
import { Filter, Grid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CategoryPage = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const tools = getToolsByCategory(category || '');

  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      'painting': 'Покрасочные инструменты',
      'power-tools': 'Электроинструменты',
      'garden-tools': 'Садовые инструменты',
      'plumbing': 'Сантехнические инструменты',
      'electrical': 'Электротехнические инструменты',
      'construction': 'Строительные инструменты',
      'cleaning': 'Уборочная техника'
    };
    return titles[category] || category;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8 mt-16">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {getCategoryTitle(category || '')}
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  size="sm"
                  className="rounded-none"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "ghost"}
                  size="sm"
                  className="rounded-none"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </Button>
            </div>
          </div>

          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
            {tools.map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
