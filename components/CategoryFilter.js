import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import { Badge } from 'native-base';
import React from 'react';
import { ListItem } from 'react-native-elements';

const CategoryFilter = ({ props }) => {
  // category, categoryFilter, productCategory, active, setActive
  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      style={{ backgroundColor: '#f2f2f2' }}
    >
      <ListItem style={{ margin: 0, padding: 0, borderRadius: 0 }}>
        <TouchableOpacity
          key={1}
          onPress={() => {
            props.CategoryFilter('all'), props.setActive(-1);
          }}
        >
          <Badge
            style={[
              styles.center,
              { margin: 5 },
              props.active == -1 ? styles.active : styles.inactive,
            ]}
          >
            <Text style={{ color: 'black' }}>All</Text>
          </Badge>
        </TouchableOpacity>
        {props.categories.map((item) => {
          <TouchableOpacity
            key={item._id}
            onPress={() => {
              props.CategoryFilter(item._id),
                props.setActive(props.categories.indexOf(item));
            }}
          >
            <Badge
              style={[
                styles.center,
                { margin: 5 },
                props.active == props.categories.indexOf(item)
                  ? styles.active
                  : styles.inactive,
              ]}
            >
              <Text style={{ color: 'black' }}>{item.name}</Text>
            </Badge>
          </TouchableOpacity>;
        })}
      </ListItem>
    </ScrollView>
  );
};

export default CategoryFilter;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: '#03bafc',
  },
  inactive: {
    backgroundColor: '#a0e1eb',
  },
});
