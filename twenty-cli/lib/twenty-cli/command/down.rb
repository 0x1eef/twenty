# frozen_string_literal: true

class Twenty::Command::Down < Twenty::Command
  set_banner usage: "twenty down [OPTIONS]",
             description: "Stop the twenty web server"
  include Twenty::Path
  prepend Twenty::Command::SQLiteMixin
  prepend Twenty::Command::RescueMixin

  def run
    options = parse_options(argv)
    run_command(options)
  end

  private

  def run_command(options)
    if File.readable?(pidfile)
      Process.kill("SIGINT", Integer(pid))
    else
      warn "PID file is not readable."
    end
  rescue Errno::ESRCH
    warn "No such process."
    FileUtils.rm(pidfile)
  end

  def pid
    @pid ||= File
               .binread(pidfile)
               .gsub(/[^\d]/, "")
  end
end
