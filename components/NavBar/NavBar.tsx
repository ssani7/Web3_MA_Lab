'use client';
export default function NavBar() {
  const NavItem = [
    {
      label: 'Home',
      id: 'home',
    },
    {
      label: 'About Us',
      id: 'aboutus',
    },
    {
      label: 'Clients',
      id: 'clients',
    },
    {
      label: 'Services',
      id: 'services',
    },
    {
      label: 'Contract us',
      id: 'contractus',
    },
  ];

  const handleClick = (item: { label: string; id: string }) => {
    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-between items-center text-white py-11 ">
      <h2 className="  text-5xl font-bold text-white">Web3MA Lab</h2>
      <div className="flex items-center space-x-7">
        {NavItem.map(item => (
          <p
            onClick={() => handleClick(item)}
            className="cursor-pointer hover:text-gray-300"
            key={item.id}
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
}
