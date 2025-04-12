package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type Product struct {
	ID          primitive.ObjectID `bson: "_id,omitempty" json: "id"`
	Name        string             `bson: "name" json: "name"`
	Description string             `bson: "description" json: "description"`
	Price       float64            `bson: "price" json: "price" `
	Invetory    int                `bson: "inventory" json: "inventory"`
	CreatedAt   time.Time          `bson: "created_at json: "created_at"`
	UpdatedAt   time.Time          `bson: "updated_at json: "updated_at"`
}
