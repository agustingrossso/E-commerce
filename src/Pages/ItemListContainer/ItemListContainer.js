import { data } from '../../Data/data';
import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryName} = useParams();
  console.log(categoryName);

  const getProducts = new Promise ((res, rej) => {
    setTimeout(() =>{
      if (categoryName){
        const filteredData = data.filter((item) => {
          return item.category === categoryName;
        });
        console.log(filteredData);
        res(filteredData);
      }else {
        res (data);
      }
      
    }, 1000);
  });

  useEffect(() => {
    getProducts.then((res) => setItems(res))
    .catch(error => console.log(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryName]);

  return (
    <div>
      <ItemList products={items} />
    </div>
  )
}

export default ItemListContainer
