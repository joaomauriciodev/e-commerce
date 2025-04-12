// Este script inicializa o banco de dados MongoDB para o e-commerce
// Cria usuários, coleções e índices necessários

db = db.getSiblingDB('ecommerce');

// Criação do usuário para o serviço de produtos
db.createUser({
  user: 'product_service',
  pwd: 'product_password',
  roles: [
    { role: 'readWrite', db: 'ecommerce' }
  ]
});

// Criação das coleções
db.createCollection('products');
db.createCollection('categories');

// Criação de índices
db.products.createIndex({ "name": 1 });
db.products.createIndex({ "price": 1 });
db.products.createIndex({ "inventory": 1 });
db.categories.createIndex({ "name": 1 }, { unique: true });

// Inserção de dados iniciais de exemplo
db.categories.insertMany([
  { name: 'Eletrônicos', description: 'Dispositivos eletrônicos e gadgets' },
  { name: 'Roupas', description: 'Vestuário e acessórios' },
  { name: 'Alimentos', description: 'Produtos alimentícios' },
  { name: 'Livros', description: 'Livros, e-books e audiolivros' }
]);

// Inserir produtos de exemplo
db.products.insertMany([
  {
    name: 'Smartphone XYZ',
    description: 'Smartphone de última geração com câmera tripla',
    price: 1299.99,
    inventory: 50,
    category: 'Eletrônicos',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Notebook Pro',
    description: 'Notebook com processador rápido e SSD de alta capacidade',
    price: 4599.99,
    inventory: 25,
    category: 'Eletrônicos',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Camiseta Premium',
    description: 'Camiseta de algodão de alta qualidade',
    price: 79.99,
    inventory: 200,
    category: 'Roupas',
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Livro: Microserviços com Go',
    description: 'Aprenda a construir sistemas distribuídos com Go e Kubernetes',
    price: 129.99,
    inventory: 35,
    category: 'Livros',
    created_at: new Date(),
    updated_at: new Date()
  }
]);

print('Inicialização do MongoDB concluída com sucesso!');