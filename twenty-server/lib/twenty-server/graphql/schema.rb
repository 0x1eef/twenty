# frozen_string_literal: true

module Twenty::GraphQL
  class Schema < GraphQL::Schema
    query Type::Query
    mutation Type::Mutation
  end
end
