# spec/models/todo_spec.rb
require 'rails_helper'

# Test suite for the Todo model
RSpec.describe Article, type: :model do
  # Validation tests
  # ensure columns title and created_by are present before saving
  it { should validate_presence_of(:title) }
  it { should validate_length_of(:title) }
  it { should validate_presence_of(:description) }
  it { should validate_length_of(:description) }
end
