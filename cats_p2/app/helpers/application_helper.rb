module ApplicationHelper
    def highlight(text)
    "<strong class=\"highlight\">#{h(text)}</strong>".html_safe
  end
end
