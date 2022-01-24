class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :password_digest
end
