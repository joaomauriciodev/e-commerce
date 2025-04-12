package api

import (
	"encoding/json"
	"joaomauriciodev/e-commerce/db"
	"net/http"
)

type ProductHandler struct {
	db *db.MongoDb
}

func NewProductHandler(database *db.MongoDb) *ProductHandler {
	return &ProductHandler{db: database}
}

func (h *ProductHandler) GetProducts(w http.ResponseWriter, r *http.Request) {
	products, err := h.db.FindAllProducts()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}
