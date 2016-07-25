package com.marketDirect.services;

import com.marketDirect.entities.Vendor;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaeldelli-gatti on 7/19/16.
 */
public interface VendorRepository extends CrudRepository<Vendor, Integer> {
    Vendor findByName(String name);
    Iterable<Vendor> findByNameLike(String search);
    Iterable<Vendor> findByLocation(String location);
}
