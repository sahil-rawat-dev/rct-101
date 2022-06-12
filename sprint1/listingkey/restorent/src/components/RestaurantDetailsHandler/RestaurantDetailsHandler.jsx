import { useEffect, useState } from "react";
import styles from "./RestaurantDetailsHandler.module.css";

export const RestaurantDetails = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch("http://localhost:5000/restaurants").then((d) =>
      d.json()
    );
    console.log(data);
    setData(data);
  };
  const handleSort = (sortBy) => {
    let nrestaurants = [...data];
    nrestaurants.sort((a, b) => {
      return b[sortBy] < a[sortBy] ? 1 : -1;
    });
    setData(nrestaurants);
    // console.log(nrestaurants);
  };
  const handleCard = () => {
    let cardRestaurants = [...data];
    let newarr = [];
    for (var i = 0; i < cardRestaurants.length; i++) {
      if (cardRestaurants[i].payment_methods.card === true) {
        newarr.push(cardRestaurants[i]);
        console.log(cardRestaurants);
      }
    }
    setData(newarr);
  };

  return (
    <>
      <div>
        <button onClick={handleCard}>Only Card</button>
        {/* <button onClick={handleCash}>Only Cash</button>
        <button onClick={handleAll}>All</button> */}
      </div>
      <div>
        <select
          className="sortby"
          onChange={(e) => handleSort(e.target.value)}
          //   onChange={(e) => console.log(e.target.value)}
        >
          <option value="1">Above 1</option>
          <option value="2">Above 2</option>
          <option value="3">Above 3</option>
          <option value="4">Above 4</option>
        </select>
        <button onClick={handleSort}>Sort By Rating</button>
      </div>
      {data.map((e) => (
        <div className={styles.divHandler} key={e.id}>
          <div className={styles.restaurantDetails}>
            <div className={styles.imageHandler}>
              <img src={e.image} alt="" />
            </div>
            <div className={styles.contentHandler}>
              <h1>{e.name}</h1>
              <p>{e.categories}</p>
              <p>Costs $ {e.cost_for_one} for one person</p>
              <p>Minimum 50-Takes 30 Minutes</p>
              <p>"Takes Online Payemnt"</p>
            </div>
            <div className={styles.likeReviewHandler}>
              <div className={styles.rating}>{e.rating}</div>
              <p>{e.reviews}-reviews</p>
              <p>{e.total_votes}-votes</p>
            </div>
          </div>
          <div className={styles.orderHandler}>
            <button>Order Online</button>
          </div>
        </div>
      ))}
    </>
  );
};
