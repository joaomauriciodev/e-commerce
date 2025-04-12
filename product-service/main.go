package main

import (
	"joaomauriciodev/e-commerce/db"
	"log"
	"os"
)

func main() {
	mongoURI := os.Getenv("MONGO_URL")
	if mongoURI == "" {
		mongoURI = "mongodb://localhost:27017"
	}

	_, err := db.Connect(mongoURI)
	if err != nil {
		log.Fatalf("Falha ao conectar ao banco de dados: %v", err)
	}

}
