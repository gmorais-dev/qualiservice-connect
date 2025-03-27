
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Star } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-300/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 animate-fade-in">
                Transforme a maneira como você <span className="text-primary">contrata</span> ou <span className="text-primary">oferece</span> serviços
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-100">
                Junte-se a milhares de usuários que estão revolucionando o mercado de serviços. 
                Seja como cliente ou prestador, o QualiService está pronto para atender suas necessidades.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in animate-delay-200">
                <Button size="lg" className="group">
                  Comece Agora
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  Baixe o Aplicativo
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in animate-delay-300">
                <div className="bg-secondary/50 dark:bg-gray-700/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+10.000</div>
                  <p className="text-muted-foreground">Usuários ativos</p>
                </div>
                
                <div className="bg-secondary/50 dark:bg-gray-700/50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+5.000</div>
                  <p className="text-muted-foreground">Prestadores verificados</p>
                </div>
                
                <div className="bg-secondary/50 dark:bg-gray-700/50 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center gap-1 text-3xl font-bold text-primary mb-2">
                    4.8
                    <Star className="h-6 w-6 fill-primary text-primary" />
                  </div>
                  <p className="text-muted-foreground">Avaliação média</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
