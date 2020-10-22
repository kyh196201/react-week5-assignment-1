import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './regions/RegionsContainer';
import CategoriesContainer from './categories/CategoriesContainer';
import RestaurantsContainer from './restaurants/RestaurantsContainer';

import Loading from './Loading';

import {
  loadInitialState,
} from './redux/actions';

export default function App() {
  const { loading } = useSelector((({ category, region }) => ({
    loading: category.loading && region.loading,
  })));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialState());
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </>
  );
}
