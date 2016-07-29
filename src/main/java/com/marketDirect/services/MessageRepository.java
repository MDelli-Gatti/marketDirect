package com.marketDirect.services;


import com.marketDirect.entities.Message;
import com.marketDirect.entities.Vendor;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by illladell on 7/28/16.
 */
public interface MessageRepository extends CrudRepository<Message, Integer> {
    Iterable<Message> findByVendor(Vendor vendor);
}
