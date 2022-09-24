import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);

      const response = await fetch(`${url}${id}`);
      const data = await response.json();

      if (data.drinks) {
        const {
          idDrink: id,
          strDrink: name,
          strDrinkThumb: image,
          strAlcoholic: info,
          strGlass: glass,
          strInstructions: instruction,
          strIngredient1: ing1,
          strIngredient2: ing2,
          strIngredient3: ing3,
          strIngredient4: ing4,
          strIngredient5: ing5,
        } = data.drinks[0];

        const newCockTails = {
          id,
          name,
          image,
          info,
          glass,
          instruction,
          ing1,
          ing2,
          ing3,
          ing4,
          ing5,
        };
        setCocktail(newCockTails);
      } else {
        setCocktail(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!cocktail) {
    return <h2 className="section-title">No Cocktail To Display </h2>;
  }

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        Back To Home
      </Link>
      <h2 className="section-title">{cocktail.name} </h2>
      <div className="drink">
        <img src={cocktail.image} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name : </span>
            {cocktail.name}
          </p>
          <p>
            <span className="drink-data">Info : </span>
            {cocktail.info}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {cocktail.glass}
          </p>
          <p>
            <span className="drink-data">Instruction : </span>
            {cocktail.instruction}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
