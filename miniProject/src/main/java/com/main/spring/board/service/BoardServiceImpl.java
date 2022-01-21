package com.main.spring.board.service;

import com.main.spring.board.dto.BoardDto;
import com.main.spring.board.entity.BoardEntity;
import com.main.spring.board.repository.BoardRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Override
    public List<BoardDto> findAll() {
        List<BoardEntity> list = this.boardRepository.findAll();
        ModelMapper modelMapper = new ModelMapper();
        List<BoardDto> resultList = Arrays.asList(modelMapper.map(list, BoardDto[].class));
        return resultList;
    }
}
