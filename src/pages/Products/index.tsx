import React, { useContext, useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Product } from '../../@types/products';
import { Constants } from '../../common';
import { CardProduct, Modes } from '../../components';
import CartContext from '../../contexts/CartContext';
import ProductsContext from '../../contexts/ProductsContext';
import { Metrics as metrics } from '../../styles';
import { Container } from './styles';

const Products: React.FC = () => {
  const { loading, products, fetchProducts, meta } = useContext(ProductsContext);
  const { addProduct } = useContext(CartContext);
  const [numColumns, setNumColumns] = useState(metrics.screenWidth < Constants.MIN_WIDTH ? 1 : 2);
  const insets = useSafeAreaInsets();

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <CardProduct data={item} onPress={(data) => addProduct(data)} />
  );

  const onReached = (page = 1) => {
    if (!loading && page <= meta.total) {
      fetchProducts(page);
    }
  };

  const handleMode = (ncolumns: number) => {
    setNumColumns(ncolumns);
  };

  const renderHeader = () => {
    const type = numColumns === 1 ? 'list' : 'grid';
    return <Modes type={type} onPress={handleMode} />;
  };

  return (
    <Container>
      <FlatList
        key={numColumns === 1 ? '_' : '#'}
        keyExtractor={(item) => (numColumns === 1 ? '_' : '#') + item.id}
        data={products}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={fetchProducts}
        numColumns={numColumns}
        style={{ flex: 1 }}
        horizontal={false}
        onEndReachedThreshold={0.5}
        onEndReached={() => onReached(meta.page + 1)}
        initialNumToRender={4}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: metrics.externalPadding,
          paddingBottom: metrics.externalPadding + insets.bottom,
        }}
        ListHeaderComponent={renderHeader}
      />
    </Container>
  );
};

export default Products;
