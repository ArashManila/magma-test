import utiles from "../../utiles/utiles";


export const TableHeader =()=>{
  const categories = [
    {
      title:"Проект",
      id:utiles.makeid(5)
    },
    {
      title:"Название",
      id:utiles.makeid(5)
    },
    {
      title:"ГИП",
      id:utiles.makeid(5)
    },
    {
      title:"Тип ОКС",
      id:utiles.makeid(5)
    },
    {
      title:"Объект строительства",
      id:utiles.makeid(5)
    },
    {
      title:"Дата заврешения",
      id:utiles.makeid(5)
    },
  ]
  return(
    <thead>
      <tr>
          {categories.map(category=>
            <th key={category.id}>{category.title}</th>
          )}
      </tr>
    </thead>
  );
}