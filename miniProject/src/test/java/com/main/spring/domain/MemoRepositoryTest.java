package com.main.spring.domain;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

@SpringBootTest
@Transactional
public class MemoRepositoryTest {
    @Autowired
    MemoRepository memoRepository;

    @Test
    public void InsertDummies() {


            Memo memo = new Memo(1L,"text");
            memoRepository.save(memo);

    }
}

