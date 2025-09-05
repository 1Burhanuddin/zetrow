
const Categories = () => {
  const categories = [
    {
      id: 1,
      title: 'Household Scrap',
      description: 'Old appliances, bottles, papers & plastics — we recycle it all from your home.',
      image: '/images/category/1.jpeg',
      alt: 'Household Scrap',
      icon: '🏠'
    },
    {
      id: 2,
      title: 'Commercial/Corporate Scrap',
      description: 'From offices to retail spaces, we handle bulk scrap responsibly and on-time.',
      image: '/images/category/2.jpeg',
      alt: 'Commercial Scrap',
      icon: '🏢'
    },
    {
      id: 3,
      title: 'Industrial Scrap',
      description: 'Heavy metals, machinery, and production waste collected with transparency.',
      image: '/images/category/3.jpeg',
      alt: 'Industrial Scrap',
      icon: '🏭'
    },
    {
      id: 4,
      title: 'Vehicle Scrap',
      description: 'Cars, bikes, batteries & spare parts — safe and certified vehicle recycling.',
      image: '/images/category/4.jpeg',
      alt: 'Vehicle Scrap',
      icon: '🚗'
    },
    {
      id: 5,
      title: 'Demolition Scrap',
      description: 'We handle the safe removal and recycling of demolition materials.',
      image: '/images/category/5.jpeg',
      alt: 'Demolition Scrap',
      icon: '🏗️'
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
