package com.lycoris62.todolist.service;

import com.lycoris62.todolist.domain.Todo;
import com.lycoris62.todolist.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository todoRepository;

    @Autowired
    public TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    /**
     * 투두리스트 등록
     */
    public Long add(Todo todo) {
        todoRepository.save(todo);
        return todo.getId();
    }

    /**
     * 전체 투두리스트 조회
     */
    public List<Todo> findTodos() {
        return todoRepository.findAll();
    }

    /**
     * 특정 id로 투두 조회
     */
    public Optional<Todo> findTodo(Long id) {
        return todoRepository.findById(id);
    }

    /**
     * 특정 id로 투두 Done 수정
     */
    public List<Todo> updateTodoDone(Long id) {
        Optional<Todo> todo = todoRepository.findById(id);
        todo.get().setIsDone(!todo.get().getIsDone());
        return todoRepository.updateById(todo.get().getId(), todo.get());
    }

    /**
     * 특정 id로 투두 Content 수정
     */
    public List<Todo> updateTodoContent(Long id, String content) {
        Optional<Todo> todo = todoRepository.findById(id);
        todo.get().setTodo(content);
        return todoRepository.updateById(todo.get().getId(), todo.get());
    }
}
