import { View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { NFTData } from '../constants';
import { HomeHeader, FocusedStatusBar, NTFCard } from '../components';
import { useEffect, useState } from 'react';

import axios from 'axios';

const Home = ({ products }) => {
  const [productList, setProductList] = useState([]);
  const [productFilter, setProductFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [productCategory, setProductCategory] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.0.11:3000/api/v1/products/')
      .then((res) => {
        setProductList(res.data);
        setProductFilter(res.data);
        setProductCategory(res.data.category);
        setActive(-1);
        setInitialState(res.data);

        setLoading(false);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
    return () => {
      setProductList();
      setProductFilter();
      setLoading(true);
    };
  }, []);

  //Category
  const changeCategory = (category) => {
    {
      category === 'all'
        ? [setProductCategory(initialState), setActive(true)]
        : [
            setProductCategory(
              products.filter(
                (i) => (i.category._id = category),
                setActive(true)
              )
            ),
          ];
    }
  };

  const handleSearch = (value) => {
    if (!value.length) setProductFilter(productFilter);
    const filteredData = productList.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.category.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData.length) {
      setProductFilter(filteredData);
    } else {
      setProductFilter(NFTData);
    }
  };
  const handleCategory = (value) => {
    if (!value.length) setProductFilter(productFilter);
    const filteredData = productList.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.category.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredData.length) {
      setProductFilter(filteredData);
    } else {
      setProductFilter(NFTData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={'black'} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <View style={{ zIndex: 0 }}>
            <FlatList
              data={productFilter}
              renderItem={({ item, index }) => <NTFCard data={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <HomeHeader categoryPress={() => {}} onSearch={handleSearch} />
              }
            />
            <View></View>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: '#38bdf8' }} />
          <View style={{ flex: 1, backgroundColor: '#f1f5f9' }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default Home;
