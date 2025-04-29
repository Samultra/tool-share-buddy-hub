import React, { useState, useMemo } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ToolCard from '../components/ToolCard';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Filter, MapPin, SlidersHorizontal, Grid, List } from 'lucide-react';

const ToolsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchLocation, setSearchLocation] = useState("Таганрог");
  const [maxDistance, setMaxDistance] = useState("50");
  
  const categories = [
    "Электроинструменты",
    "Садовые инструменты",
    "Ручные инструменты",
    "Сантехника",
    "Отделочные работы",
    "Электрика",
    "Покраска",
    "Уборочная техника",
    "Строительные инструменты",
  ];

  // Все инструменты
  const tools = [
    // Электроинструменты
    {
      id: "1",
      name: "Дрель DeWalt",
      imageUrl: "https://www.pnevmoteh.ru/sites/pnevmoteh.ru/files/images/dwd112s-ks.jpg",
      price: 800,
      priceUnit: "день" as const,
      category: "Электроинструменты",
      rating: 4.8,
      location: "Москва",
      distance: "1.2 км",
    },
    {
      id: "2",
      name: "Перфоратор Bosch",
      imageUrl: "https://www.promarenda.pro/upload/iblock/3cb/3cb585aeb99019f5f168d01203dda7d1.jpg",
      price: 1800,
      priceUnit: "день" as const,
      category: "Электроинструменты",
      rating: 4.7,
      location: "пр. Мира, 45",
      distance: "2.5 км",
    },
    {
      id: "3",
      name: "Шуруповерт Makita",
      imageUrl: "https://cdn.vseinstrumenti.ru/images/goods/stroitelnyj-instrument/shurupoverty/759924/1200x800/51379651.jpg",
      price: 1200,
      priceUnit: "день" as const,
      category: "Электроинструменты",
      rating: 4.8,
      location: "ул. Ленина, 15",
      distance: "1.2 км",
    },
    {
      id: "4",
      name: "Циркулярная пила DeWalt",
      imageUrl: "https://dewalt.store/media/catalog/product/cache/48/small_image/1248x/a4e40ebdc3e371adff845072e1c73f37/e/9/e9369120-fe55-11ef-b777-005056043025.webp",
      price: 1500,
      priceUnit: "день" as const,
      category: "Электроинструменты",
      rating: 4.9,
      location: "ул. Центральная, 12",
      distance: "0.8 км",
    },
    {
      id: "5",
      name: "Лобзик Bosch",
      imageUrl: "https://cdn-products.sdvor.com/images/sdvor-catalog/800x800/5/r26602.jpg?t=1709275034476",
      price: 900,
      priceUnit: "день" as const,
      category: "Электроинструменты",
      rating: 4.5,
      location: "ул. Пушкина, 8",
      distance: "1.5 км",
    },
    {
      id: "6",
      name: "Шлифмашинка Makita",
      imageUrl: "https://grand-instrument.ru/upload/iblock/68f/68f7b8a289123cfd933969e20002a905.jpeg",
      price: 700,
      priceUnit: "день" as const,
      category: "Электроинструменты",
      rating: 4.7,
      location: "ул. Гагарина, 23",
      distance: "2.3 км",
    },
    {
      id: "40",
      name: "Компрессор 6 галлонов",
      imageUrl: "https://spb.pnevmoteh.ru/sites/pnevmoteh.ru/files/styles/product-full/public/images/sb4-24.f114.png?itok=2xCrD4GE",
      price: 2200,
      priceUnit: "день" as const,
      category: "Электроинструменты",
      rating: 4.6,
      location: "ул. Садовая, 78",
      distance: "1.9 км",
    },
    // Строительные инструменты
    {
      id: "31",
      name: "Бетономешалка",
      imageUrl: "https://electrolite.ru/Pc/shop/full/2967_17183549639935.jpg",
      price: 2500,
      priceUnit: "день" as const,
      category: "Строительные инструменты",
      rating: 4.7,
      location: "пр. Ленина, 56",
      distance: "2.5 км",
    },
    {
      id: "32",
      name: "Алюминиевая лестница 2.5м",
      imageUrl: "https://stroykray.ru/uploads/all/0a/13/91/0a139116b81214ece334b563dd7e0c2c.jpg",
      price: 1000,
      priceUnit: "день" as const,
      category: "Строительные инструменты",
      rating: 4.6,
      location: "ул. Строителей, 12",
      distance: "1.8 км",
    },
    {
      id: "33",
      name: "Тачка строительная",
      imageUrl: "https://vashdom24.ru/upload/p_img/product/big/00604936.jpg",
      price: 800,
      priceUnit: "день" as const,
      category: "Строительные инструменты",
      rating: 4.5,
      location: "Казань",
      distance: "2.2 км",
    },
    {
      id: "34",
      name: "Строительные леса",
      imageUrl: "https://www.prom23.ru/upload/resize_cache/iblock/7e8/650_650_1/7e88855bb9b3ba27f9c3ca22052f15ff.jpg",
      price: 3000,
      priceUnit: "день" as const,
      category: "Строительные инструменты",
      rating: 4.8,
      location: "Москва",
      distance: "2.1 км",
    },
    {
      id: "35",
      name: "Вибратор для бетона",
      imageUrl: "https://www.mosstroyprokat.ru/uploads/model-sovremennogo-glubinnogo-vibratora.jpg",
      price: 1500,
      priceUnit: "день" as const,
      category: "Строительные инструменты",
      rating: 4.6,
      location: "Санкт-Петербург",
      distance: "1.7 км",
    },
    {
      id: "36",
      name: "Строительный миксер",
      imageUrl: "https://ir.ozone.ru/s3/multimedia-1-f/c1000/6958585779.jpg",
      price: 1200,
      priceUnit: "день" as const,
      category: "Строительные инструменты",
      rating: 4.7,
      location: "Казань",
      distance: "2.3 км",
    },
    // Сантехника
    {
      id: "13",
      name: "Набор трубных ключей",
      imageUrl: "https://st5.stpulscen.ru/images/product/540/107/585_original.jpg",
      price: 800,
      priceUnit: "день" as const,
      category: "Сантехника",
      rating: 4.5,
      location: "Москва",
      distance: "1.5 км",
    },
    {
      id: "14",
      name: "Труборез Ridgid",
      imageUrl: "https://tool-impex.ru/upload/iblock/c83/c83d09d3e4fbf07ea289c373be655b26.jpg",
      price: 1200,
      priceUnit: "день" as const,
      category: "Сантехника",
      rating: 4.7,
      location: "Санкт-Петербург",
      distance: "2.2 км",
    },
    {
      id: "15",
      name: "Гидравлический пресс",
      imageUrl: "https://cmpnn.com/wp-content/uploads/2019/08/1.jpg",
      price: 2000,
      priceUnit: "день" as const,
      category: "Сантехника",
      rating: 4.8,
      location: "Казань",
      distance: "1.8 км",
    },
    {
      id: "16",
      name: "Набор для пайки труб",
      imageUrl: "https://adr-tools.ru/upload/resize_cache/iblock/622/br7857lmejf928cvjl8jjkn5nc55sj23/1200_1200_140cd750bba9870f18aada2478b24840a/dytron_set_p_4a_650w_tw_standard_blue_20_63_apparat_dlya_payki_polipropilenovykh_trub.jpg",
      price: 1500,
      priceUnit: "день" as const,
      category: "Сантехника",
      rating: 4.6,
      location: "Москва",
      distance: "2.1 км",
    },
    {
      id: "17",
      name: "Трубогиб",
      imageUrl: "https://ro-tools.ru/upload/iblock/dcf/virax-minsk_240842.jpg",
      price: 1000,
      priceUnit: "день" as const,
      category: "Сантехника",
      rating: 4.5,
      location: "Санкт-Петербург",
      distance: "1.7 км",
    },
    {
      id: "18",
      name: "Набор для прочистки труб",
      imageUrl: "https://discount-tools.ru/upload/iblock/3ab/3ab981e3b68813a0b36563badda7ec7f.jpg",
      price: 900,
      priceUnit: "день" as const,
      category: "Сантехника",
      rating: 4.7,
      location: "Казань",
      distance: "2.3 км",
    },
    // Уборочная техника
    {
      id: "37",
      name: "Мойка высокого давления 3000 PSI",
      imageUrl: "https://ae01.alicdn.com/kf/S820f6dd30a724025972b3316b8abf4few.jpg",
      price: 3000,
      priceUnit: "день" as const,
      category: "Уборочная техника",
      rating: 4.7,
      location: "Москва",
      distance: "2.2 км",
    },
    {
      id: "38",
      name: "Промышленный пылесос",
      imageUrl: "https://nskprokat.ru/wp-content/uploads/2020/12/nt-65-2-1.jpg",
      price: 1500,
      priceUnit: "день" as const,
      category: "Уборочная техника",
      rating: 4.6,
      location: "Санкт-Петербург",
      distance: "1.8 км",
    },
    {
      id: "39",
      name: "Поломоечная машина",
      imageUrl: "https://clearspb.ru/sites/default/files/imagecache/product_full/1-783-230.jpg",
      price: 2500,
      priceUnit: "день" as const,
      category: "Уборочная техника",
      rating: 4.8,
      location: "Казань",
      distance: "2.1 км",
    }
  ];

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      // Фильтр по цене
      const priceInRange = tool.price >= priceRange[0] && tool.price <= priceRange[1];
      
      // Фильтр по категориям
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(tool.category);
      
      return priceInRange && categoryMatch;
    });
  }, [tools, priceRange, selectedCategories]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories(prev => [...prev, category]);
    } else {
      setSelectedCategories(prev => prev.filter(c => c !== category));
    }
  };

  const handleResetFilters = () => {
    setPriceRange([0, 10000]);
    setSelectedCategories([]);
    setSearchLocation("Москва");
    setMaxDistance("50");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Инструменты в аренду</h1>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm"
                className="md:hidden"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Фильтры
              </Button>
              
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
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Фильтры */}
            <div className={`md:w-1/4 lg:w-1/5 ${!filtersOpen && 'hidden md:block'}`}>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">Фильтры</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={handleResetFilters}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Сбросить
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {/* Местоположение */}
                  <div>
                    <h3 className="font-medium mb-4">Местоположение</h3>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <Input 
                        placeholder="Введите ваш адрес" 
                        className="pl-9" 
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                      />
                    </div>
                    <div className="mt-2">
                      <Label className="text-sm text-gray-600">Расстояние</Label>
                      <select 
                        className="mt-1 form-input"
                        value={maxDistance}
                        onChange={(e) => setMaxDistance(e.target.value)}
                      >
                        <option value="5">5 км</option>
                        <option value="10">10 км</option>
                        <option value="15">15 км</option>
                        <option value="25">25 км</option>
                        <option value="50">50 км</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Категории */}
                  <div>
                    <h3 className="font-medium mb-4">Категории</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox 
                            id={`category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                          />
                          <label
                            htmlFor={`category-${category}`}
                            className="ml-2 text-sm font-medium text-gray-700"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Цена */}
                  <div>
                    <h3 className="font-medium mb-4">Цена</h3>
                    <div className="space-y-4">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={10000}
                        step={100}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{priceRange[0]} ₽</span>
                        <span>{priceRange[1]} ₽</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Список инструментов */}
            <div className="md:w-3/4 lg:w-4/5">
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} {...tool} />
                ))}
              </div>
              {filteredTools.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">По вашему запросу ничего не найдено</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ToolsPage;
