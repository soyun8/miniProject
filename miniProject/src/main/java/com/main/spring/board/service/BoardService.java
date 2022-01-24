package com.main.spring.board.service;

import com.main.spring.board.dto.BoardListResponseDTO;
import com.main.spring.board.dto.BoardSaveRequestDTO;
import com.main.spring.board.dto.BoardSelectResponseDTO;
import com.main.spring.board.entity.Board;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface BoardService {

    Long updateBoard();

    void saveBoard(BoardSaveRequestDTO requestDto);

    void deleteBoard(Long id);

    List<BoardListResponseDTO> boardList();

    BoardSelectResponseDTO selectBoard(Long idx);

    int updateHit(Long id);
}
