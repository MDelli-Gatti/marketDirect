package com.marketDirect.services;

import com.marketDirect.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaeldelli-gatti on 7/19/16.
 */
public interface UserRepository extends CrudRepository<User, Integer> {
}
