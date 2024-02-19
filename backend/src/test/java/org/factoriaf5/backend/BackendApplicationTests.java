package org.factoriaf5.backend;

import org.factoriaf5.backend.models.Book;
import org.factoriaf5.backend.repository.BookRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest
@AutoConfigureMockMvc
class BackendApplicationTests {
	@Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private BookRepository bookRepository;

	@Test
	void testFindAll() throws Exception{
		mockMvc.perform(MockMvcRequestBuilders.get("/books"))
		.andExpect(MockMvcResultMatchers.status().isOk());
	}

	@Test
    public void testFindById() throws Exception {
        Book book = new Book(1L, "La Historia Interminable", "Michel Ende", "Esta es la sipnosis");
        bookRepository.save(book);

        // Realizar la solicitud GET con el ID del libro
        mockMvc.perform(get("/books/{id}", 1))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.id").value(1))
               .andExpect(jsonPath("$.title").value("La Historia Interminable"))
               .andExpect(jsonPath("$.author").value("Michel Ende"))
               .andExpect(jsonPath("$.synopsis").value("Esta es la sipnosis"));
    }

	

    }







