package com.main.spring.board.service;

import com.main.spring.board.dto.BoardDto;
import com.main.spring.board.entity.BoardEntity;
import com.main.spring.board.entity.BoardRepository;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

@Service
@Slf4j
public class BoardServiceImpl implements BoardService {

    @Autowired
    private BoardRepository boardRepository;

    ModelMapper modelMapper = new ModelMapper();

    @Override
    public List<BoardDto> findAll() {
        List<BoardEntity> list = this.boardRepository.findAll();
        List<BoardDto> resultList = Arrays.asList(modelMapper.map(list, BoardDto[].class));
        return resultList;
    }

    @Override
    public BoardEntity write(BoardDto boardto) {
        BoardEntity boardEntity = modelMapper.map(boardto, BoardEntity.class);
        // 레포지토리에서 쓰는 속성값들을 알아보자
        return boardRepository.save(boardEntity);
    }

    @Override
    public Optional<BoardEntity> findById(Long idx) {
        return boardRepository.findById(idx);
    }

    @Override
    public void deleteById(Long idx) {
        boardRepository.deleteById(idx);
    }

    @Override
    public BoardEntity Update(BoardDto boardto, Long idx) {
        BoardEntity boardEntity = modelMapper.map(boardto, BoardEntity.class);
       /* BoardEntity entity = new BoardEntity();
        entity.setContent(boardto.getContent());
        entity.setTitle(boardto.getTitle());
        entity.setIdx(idx);*/
        return boardRepository.save(boardEntity);
    }

    /**
     * Optional<T>
     * 이러한 Optional 객체를 사용하면 예상치 못한 NullPointerException 예외를 제공되는 메소드로 간단히 회피할 수 있습니다.
     * 즉, 복잡한 조건문 없이도 널(null) 값으로 인해 발생하는 예외를 처리할 수 있게 됩니다.
     * */
    @Override
    public int updateViw(Long idx) {
        // 일단 목록을 조회해와서
        Optional<BoardEntity> entity = boardRepository.findById(idx);
        // hit_cnt만 꺼내와서 ++ 시켜야함
        //boardRepository.updateView(entity, idx);
        BoardEntity boardEntity = modelMapper.map(entity, BoardEntity.class);
        log.info("dddd"+idx+"======결과값=====");
        return boardRepository.updateView(idx);
    }
}
