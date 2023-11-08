-- setup thread
local thread_num = 0
function setup(thread)
	thread_num = thread_num + 1
end

-- Get args from command line
-- args[0]: echo size
local echo_size = 0
function init(args)
	local r = {}
	local depth = tonumber(args[1]) or 1
	for i=1,depth do
		r[i] = wrk.format()
	end
	req = table.concat(r)
end

request = function()
	return req
end

-- report data
result = {}
function done(summary, latency, requests)
	io.write("----------------\n")
	io.write("Benchmark_Result\n")

	-- QPS
	local throughput = summary.requests/(summary.duration/(10^6))
	result["QPS"] = throughput
	io.write(string.format("QPS,%d\n", throughput))

	-- Latency, TP99, TP999
	for _, p in pairs({ 99, 99.9 }) do
		local n = latency:percentile(p)
		result[string.format("TP%g", p)] = n
		io.write(string.format("TP%g,%d\n", p, n))
	end

	local total_error = 0
	for i, value in pairs(summary.errors) do
		total_error = total_error + value
	end
	io.write(string.format("request,%d\n", summary.requests))
	io.write(string.format("failed,%d\n", total_error))
	io.write("----------------\n\n")
end
