import React from 'react';

const Categories = () => {
  const categories = [
    { id: 1, image: '/images/category/1.jpeg', alt: 'Category 1' },
    { id: 2, image: '/images/category/2.jpeg', alt: 'Category 2' },
    { id: 3, image: '/images/category/3.jpeg', alt: 'Category 3' },
    { id: 4, image: '/images/category/4.jpeg', alt: 'Category 4' },
    { id: 5, image: '/images/category/5.jpeg', alt: 'Category 5' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 p-4">Our Category / Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zetrow: Every scrap solution from household to demolition - Total control
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <div key={category.id} className="w-full object-contain overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:border-2 border-primary">
              <img 
                src={category.image} 
                alt={category.alt} 
                className="w-full object-contain hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
