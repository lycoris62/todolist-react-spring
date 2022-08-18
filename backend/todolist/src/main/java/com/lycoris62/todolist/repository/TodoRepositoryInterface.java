package com.lycoris62.todolist.repository;

import com.lycoris62.todolist.domain.Todo;

import java.util.List;
import java.util.Optional;

public interface TodoRepositoryInterface {
    Todo save(Todo todo);
    Optional<Todo> findById(Long id);
    List<Todo> findAll();
}
