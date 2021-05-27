require 'rails_helper'

RSpec.describe 'Articles API', type: :request do
  # initialize test data
  let!(:articles) { create_list(:article, 10) }
  let(:article_id) { articles.first.id }

  let(:valid_article) { {
    title: 'Lorem Ipsum dolor sit amet',
    description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.'
  } }

  # Test suite for GET /articles
  describe 'GET /articles' do
    # make HTTP get request before each example
    before { get '/articles' }

    it 'returns articles' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /articles/:id
  describe 'GET /articles/:id' do
    before { get "/articles/#{article_id}" }

    context 'when the record exists' do
      it 'returns the todo' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(article_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

    context 'when the record does not exist' do
      let(:article_id) { -1 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to eq("{\"error\":\"Couldn't find Article with 'id'=" + article_id.to_s + "\"}")
      end
    end
  end

  # Test suite for POST /articles
  describe 'POST /articles' do
    # valid payload
    let(:valid_attributes) { valid_article }

    context 'when the request is valid' do
      before { post '/articles', params: valid_attributes }

      it 'creates an article' do
        expect(json['title']).to eq('Lorem Ipsum dolor sit amet')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when the request is invalid' do
      before { post '/articles', params: { title: 'Correct title but no description' } }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a validation failure message' do
        expect(response.body)
          .to eq("{\"error\":{\"description\":[\"can't be blank\",\"is too short (minimum is 50 characters)\"]}}")
      end
    end
  end

  # Test suite for PUT /articles/:id
  describe 'PUT /articles/:id' do
    context 'when the record exists' do
      before { put "/articles/#{article_id}", params: valid_article }

      it 'updates the record' do
        expect(json['id']).to eq(article_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  end

  # Test suite for DELETE /articles/:id
  describe 'DELETE /articles/:id' do
    before { delete "/articles/#{article_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
