import React, { useState } from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { Product } from '../../@types/products';
import { Item, Modes } from '../../components';
import useProducts from '../../contexts/hooks/useProducts';
import metrics from '../../styles/metrics';
import { Container } from './styles';

const Products: React.FC = () => {
  const { loading, products, fetchProducts, meta } = useProducts();
  const [numColumns, setNumColumns] = useState(2);

  const renderItem: ListRenderItem<Product> = ({ item }) => <Item data={item} />;

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
        keyExtractor={(item) => (numColumns === 1 ? '_' : '#' + item.id)}
        data={products}
        renderItem={renderItem}
        refreshing={loading}
        onRefresh={fetchProducts}
        numColumns={numColumns}
        horizontal={false}
        onEndReachedThreshold={0.5}
        onEndReached={() => onReached(meta.page + 1)}
        initialNumToRender={4}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: metrics.externalPadding,
        }}
        ListHeaderComponent={renderHeader}
      />
    </Container>
  );
};

export default Products;
