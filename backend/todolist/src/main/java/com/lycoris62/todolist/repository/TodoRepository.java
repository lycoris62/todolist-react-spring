package com.lycoris62.todolist.repository;

import com.lycoris62.todolist.domain.Todo;
import org.springframework.stereotype.Repository;

import java.util.*;

@Repository
public class TodoRepository implements TodoRepositoryInterface {
    private static Map<Long, Todo> store = new HashMap<>();
    private static Long sequence = 0L;

    @Override
    public Todo save(Todo todo) {
        todo.setId(++sequence);
        store.put(todo.getId(), todo);
        return todo;
    }

    @Override
    public Optional<Todo> findById(Long id) {
        return Optional.ofNullable(store.get(id));
    }

    @Override
    public List<Todo> findAll() {
        return new ArrayList<>(store.values());
    }

    public List<Todo> updateById(Long id, Todo todo) {
        store.get(id).setIsDone(todo.getIsDone());
        store.get(id).setContent(todo.getContent());
        return new ArrayList<>(store.values());
    }
}
