package main

import (
	"joaomauriciodev/e-commerce/api"
	"joaomauriciodev/e-commerce/db"
	"log"
	"net/http"
	"os"
)

func main() {
	mongoURI := os.Getenv("MONGO_URL")
	if mongoURI == "" {
		mongoURI = "mongodb://localhost:27017"
	}

	database, err := db.Connect(mongoURI)
	if err != nil {
		log.Fatalf("Falha ao conectar ao banco de dados: %v", err)
	}

	router := api.SetupRoutes(database)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8081"
	}

	log.Printf("Serviço de Produtos rodando na porta %s", port)
	if err := http.ListenAndServe(":"+port, router); err != nil {
		log.Fatalf("Erro ao iniciar o servidor: %v", err)
	}
}
