
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Users, Home } from 'lucide-react';

const ValueProposition = () => {
  const userBenefits = [
    "Acesso a profissionais verificados e avaliados por outros usuários",
    "Orçamentos detalhados e transparentes",
    "Agendamento flexível que se adapta à sua rotina",
    "Comparação facilitada entre diversos prestadores",
    "Chat integrado para comunicação direta com o prestador",
    "Pagamento seguro com liberação apenas após aprovação"
  ];

  const providerBenefits = [
    "Aumento da visibilidade para potenciais clientes",
    "Gestão simplificada de agendamentos e serviços",
    "Recebimento garantido pelos serviços prestados",
    "Ferramentas de marketing pessoal para destaque na plataforma",
    "Dashboard completo para acompanhamento de performance",
    "Oportunidades de crescimento e expansão do negócio"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
            Proposta de valor
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            Uma plataforma que beneficia a todos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            O QualiService foi desenhado pensando nas necessidades tanto de quem busca serviços quanto de quem os oferece.
          </p>
        </div>

        <Tabs defaultValue="users" className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="users" className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Users className="mr-2 h-4 w-4" />
                Para Clientes
              </TabsTrigger>
              <TabsTrigger value="providers" className="text-base py-3 data-[state=active]:bg-primary data-[state=active]:text-white">
                <Home className="mr-2 h-4 w-4" />
                Para Prestadores
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="users" className="animate-fade-in" id="para-clientes">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-10 text-white">
                  <h3 className="text-2xl font-bold mb-6">Encontre os melhores serviços</h3>
                  <p className="text-white/90 mb-8">
                    Acesse uma ampla gama de serviços de qualidade, todos em um só lugar. 
                    Economize tempo e tenha a tranquilidade de contratar profissionais verificados.
                  </p>
                  <div className="h-64 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791055366-0d553872125f')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-6">Benefícios para quem contrata</h3>
                  <div className="space-y-4">
                    {userBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="providers" className="animate-fade-in" id="para-prestadores">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div className="md:grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-10 text-white">
                  <h3 className="text-2xl font-bold mb-6">Impulsione seu negócio</h3>
                  <p className="text-white/90 mb-8">
                    Expanda sua base de clientes e gerencie seu trabalho de forma eficiente. 
                    Aumente sua visibilidade e desenvolva uma reputação digital sólida.
                  </p>
                  <div className="h-64 relative overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d37d')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-700/80 to-transparent"></div>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-6">Benefícios para quem presta serviços</h3>
                  <div className="space-y-4">
                    {providerBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-start animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ValueProposition;
