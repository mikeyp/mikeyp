module AuthorInfoHelper
  def author_info(item, key)
    item[:author_info][key] if item[:author_info]
  end
end