package com.marketDirect.services;

import com.marketDirect.entities.Item;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaeldelli-gatti on 7/19/16.
 */
public interface ItemRepository extends CrudRepository<Item, Integer> {
}
