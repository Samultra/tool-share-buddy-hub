import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, HandHeart } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-green">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы присоединиться к сообществу?</h2>
            <p className="text-white/90 text-lg mb-8">
              Начните арендовать инструменты или разместите свои, чтобы получать дополнительный доход. 
              Присоединяйтесь к нашему сообществу, делающему проекты доступнее для каждого.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tools">
                <Button className="bg-white text-brand-green hover:bg-white/90 px-6 py-3 w-full sm:w-auto">
                  <Wrench className="mr-2 h-5 w-5" />
                  Найти инструменты
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/list-tool">
                <Button variant="outline" className="border-white text-brand-green hover:bg-white/10 px-6 py-3 w-full sm:w-auto">
                  <HandHeart className="mr-2 h-5 w-5" />
                  Сдать в аренду
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Person using tools"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
