package com.marketDirect.services;

import com.marketDirect.entities.Comment;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaeldelli-gatti on 7/25/16.
 */
public interface CommentRepository extends CrudRepository<Comment, Integer> {
    Iterable<Comment> findByVendorId(int id);
}
