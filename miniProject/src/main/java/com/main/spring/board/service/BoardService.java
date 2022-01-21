package com.main.spring.board.service;

import com.main.spring.board.dto.BoardDto;

import java.util.List;


public interface BoardService {
    public List<BoardDto> findAll();
}
