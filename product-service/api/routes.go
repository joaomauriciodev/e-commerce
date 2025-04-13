package api

import (
	"joaomauriciodev/e-commerce/db"
	"net/http"

	"github.com/gorilla/mux"
)

func SetupRoutes(database *db.MongoDb) *mux.Router {
	r := mux.NewRouter()

	handler := NewProductHandler(database)

	r.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
	}).Methods("GET")

	api := r.PathPrefix("api/products").Subrouter()
	api.HandleFunc("", handler.GetProducts).Methods("GET")

	return r
}
