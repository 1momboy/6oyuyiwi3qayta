import React, { useState, useEffect } from 'react';

const ArrayComponent = () => {
  // useState orqali massiv tipidagi state'ni yaratamiz
  const [items, setItems] = useState([]);

  // useEffect orqali side effect'larni boshlaymiz
  useEffect(() => {
    // Ushbu funksiya har bir renderdan so'ng chaqiriladi
    console.log('Komponent yangilandi!');

    // Cleanup funksiyasi (optional) - komponent bekor qilinishdan oldin chaqiriladi
    return () => {
      console.log('Komponent bekor qilindi!');
    };
  }, []); // Bo'sh dependency array berilganda, useEffect faqat bir marta komponent yangilanganida chaqiriladi

  // JSX ni render qilamiz
  return (
    <div>
      <h1>Massiv Bilan Ishlovchi Misol</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => setItems([...items, `Element ${items.length + 1}`])}>
        Element qo'shish
      </button>
    </div>
  );
};





import React, { useState, useEffect } from 'react';

const NumberComponent = () => {
  // useState orqali number tipidagi state'ni yaratamiz
  const [count, setCount] = useState(0);

  // useEffect orqali side effect'larni boshlaymiz
  useEffect(() => {
    // Ushbu funksiya har bir renderdan so'ng chaqiriladi
    console.log('Komponent yangilandi!');

    // Cleanup funksiyasi (optional) - komponent bekor qilinishdan oldin chaqiriladi
    return () => {
      console.log('Komponent bekor qilindi!');
    };
  }, []); // Bo'sh dependency array berilganda, useEffect faqat bir marta komponent yangilanganida chaqiriladi

  // JSX ni render qilamiz
  return (
    <div>
      <h1>Number Bilan Ishlovchi Misol</h1>
      <p>Sanog'ingiz: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Sanog'ingizni o'zgartirish
      </button>
    </div>
  );
};



import React, { useState, useEffect } from 'react';

const BooleanComponent = () => {
  // useState orqali boolean tipidagi state'ni yaratamiz
  const [isActive, setIsActive] = useState(false);

  // useEffect orqali side effect'larni boshlaymiz
  useEffect(() => {
    // Ushbu funksiya har bir renderdan so'ng chaqiriladi
    console.log('Komponent yangilandi!');

    // Cleanup funksiyasi (optional) - komponent bekor qilinishdan oldin chaqiriladi
    return () => {
      console.log('Komponent bekor qilindi!');
    };
  }, []); // Bo'sh dependency array berilganda, useEffect faqat bir marta komponent yangilanganida chaqiriladi

  // JSX ni render qilamiz
  return (
    <div>
      <h1>Boolean Bilan Ishlovchi Misol</h1>
      <p>Komponent faol: {isActive ? 'Ha' : 'Yo`q'}</p>
      <button onClick={() => setIsActive(!isActive)}>
        Holatni o'zgartirish
      </button>
    </div>
  );
};



import React, { useState, useEffect } from 'react';

const ProductsComponent = () => {
  // useState orqali mahsulotlar massivini yaratamiz
  const [products, setProducts] = useState([]);

  // useEffect orqali side effect'larni boshlaymiz
  useEffect(() => {
    // Ushbu funksiya har bir renderdan so'ng chaqiriladi
    console.log('Komponent yangilandi!');

    // Mahsulotlar olish uchun async funksiya
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        console.error('Mahsulotlarni olishda xatolik yuz berdi:', error);
      }
    };

    // Mahsulotlarni olish uchun funksiyani chaqirish
    fetchProducts();
  }, []); // Bo'sh dependency array berilganda, useEffect faqat bir marta komponent yangilanganida chaqiriladi

  // JSX ni render qilamiz
  return (
    <div>
      <h1>Mahsulotlar Bilan Ishlovchi Misol</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsComponent;


export default App 

