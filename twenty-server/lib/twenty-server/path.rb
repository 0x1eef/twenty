module Twenty::Path
  ##
  # @return [String]
  #  Returns the directory where twenty stores persistent data.
  def datadir
    File.join(Dir.home, ".local", "share", "20")
  end

  ##
  # @return [String]
  #  Returns the directory where twenty stores temporary data.
  def tmpdir
    File.join(Dir.tmpdir, "20")
  end

  ##
  # @return [String]
  #  Returns the file where twenty can write the PID of
  #  a web server running in the background.
  def pidfile
    File.join(tmpdir, "server.pid")
  end
end