class Twenty::Servlet::Tasks < Twenty::Servlet
  ##
  # GET /servlet/tasks/
  # GET /servlet/tasks/<id>/
  def do_GET(req, res)
    case req.path_info
    when ""
      tasks = Twenty::Task.open.order(updated_at: :desc)
      ok(res, tasks:)
    when %r|^/([\d]+)/?$|
      task = Twenty::Task.find_by(id: $1)
      task ? ok(res, task:) : not_found(res)
    else
      not_found(res)
    end
  end

  ##
  # POST /servlet/tasks/
  def do_POST(req, res)
    case req.path_info
    when ""
      task = Twenty::Task.new(JSON.parse(req.body))
      if task.save
        ok(res, task:)
      else
        errors = task.errors.full_messages
        bad_request(res, errors:)
      end
    else
      not_found(res)
    end
  end

  ##
  # PUT /servlet/tasks
  def do_PUT(req, res)
    case req.path_info
    when ""
      body = JSON.parse(req.body)
      id = body.delete("id")
      task = Twenty::Task.find_by(id:)
      task.update(body) ? ok(res, task:) : not_found(res)
    else
      not_found(res)
    end
  end

  ##
  # DELETE /servlet/tasks/<id>/
  def do_DELETE(req, res)
    case req.path_info
    when %r|^/([\d]+)/?$|
      task = Twenty::Task.find_by(id: $1)
      task.destroy ? ok(res) : not_found(res)
    else
      not_found(res)
    end
  end
end
