
const Categories = () => {
  const categories = [
    {
      id: 1,
      
      image: '/images/category/1.jpeg',
      alt: 'Household Scrap',
    },
    {
      id: 2,
      
      image: '/images/category/2.jpeg',
      alt: 'Commercial Scrap',
     
    },
    {
      id: 3,
      
      image: '/images/category/3.jpeg',
      alt: 'Industrial Scrap',
      
    },
    {
      id: 4,
      
      image: '/images/category/4.jpeg',
      alt: 'Vehicle Scrap',
      
    },
    {
      id: 5,
      
      image: '/images/category/5.jpeg',
      alt: 'Demolition Scrap',
      
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 border-b-2 p-4">Our Category / Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zetrow: Every scrap solution from household to demolition - Total control
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-emerald-200"
            >
              <img
                src={category.image}
                alt={category.alt}
                className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
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
