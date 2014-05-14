module ArticleDateHelper
  def article_date(item)
    if item[:created_at]
      item[:created_at].strftime('%B %e, %Y')
    end
  end
end